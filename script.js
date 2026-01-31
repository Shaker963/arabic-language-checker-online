document.addEventListener('DOMContentLoaded', () => {
    let networkBoxes = [];
    let editingBoxId = null; // New state for tracking which box is being edited
    let currentBoxIdForSubscribers = null;
    let boxToDeleteId = null;

    const boxModal = document.getElementById('box-modal');
    const boxModalTitle = document.getElementById('box-modal-title');
    const boxForm = document.getElementById('box-form');
    const addBoxBtn = document.getElementById('add-box-btn');
    const cancelBoxModalBtn = document.getElementById('cancel-box-modal');

    const initialSubscribersGroup = document.getElementById('initial-subscribers-group');
    const initialSubscribersTextarea = document.getElementById('initial-subscribers');

    const subscriberModal = document.getElementById('subscriber-modal');
    const subscriberBoxNumberSpan = document.getElementById('subscriber-box-number');
    const newSubscriberNameInput = document.getElementById('new-subscriber-name');
    const addNewSubscriberBtn = document.getElementById('add-new-subscriber-btn');
    const subscribersList = document.getElementById('subscribers-list');
    const cancelSubscriberModalBtn = document.getElementById('cancel-subscriber-modal');

    const deleteConfirmModal = document.getElementById('delete-confirm-modal');
    const deleteBoxNumberSpan = document.getElementById('delete-box-number');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
    const cancelDeleteBtn = document.getElementById('cancel-delete-btn');

    const networkBoxesTableBody = document.getElementById('network-boxes-table-body');
    const statTotalBoxes = document.getElementById('stat-total-boxes');
    const statTotalSubscribers = document.getElementById('stat-total-subscribers');
    const statTotalSwitches = document.getElementById('stat-total-switches');
    const statLiteConnections = document.getElementById('stat-lite-connections');

    // --- Local Storage Functions ---
    function loadNetworkBoxes() {
        const storedBoxes = localStorage.getItem('shamnetNetworkBoxes');
        if (storedBoxes) {
            networkBoxes = JSON.parse(storedBoxes);
        } else {
            // Seed some initial data if local storage is empty
            networkBoxes = [
                {
                    id: 'box-' + Date.now(),
                    boxNumber: 'SN-001',
                    switches: 12,
                    connectionType: 'Lite',
                    address: '123 Main St, Anytown',
                    locationName: 'Downtown Hub',
                    latitude: 34.0522,
                    longitude: -118.2437,
                    subscribers: ['Alice Johnson', 'Bob Williams', 'Charlie Brown', 'Diana Prince', 'Eve Adams'] // Now an array of names
                },
                {
                    id: 'box-' + (Date.now() + 1),
                    boxNumber: 'SN-002',
                    switches: 8,
                    connectionType: 'DSL',
                    address: '456 Oak Ave, Otherville',
                    locationName: 'North Side Exchange',
                    latitude: 34.0522,
                    longitude: -118.2437,
                    subscribers: ['Frank Miller', 'Grace Davis']
                },
                {
                    id: 'box-' + (Date.now() + 2),
                    boxNumber: 'SN-003',
                    switches: 16,
                    connectionType: 'Lite',
                    address: '789 Pine Ln, Somewhere',
                    locationName: 'Industrial Park',
                    latitude: 34.0522,
                    longitude: -118.2437,
                    subscribers: ['Heidi King', 'Ivan Lopez', 'Judy Green', 'Kyle White', 'Liam Black', 'Mia Hall', 'Nora Young']
                }
            ];
        }
    }

    function saveNetworkBoxes() {
        localStorage.setItem('shamnetNetworkBoxes', JSON.stringify(networkBoxes));
    }

    // --- UI Update Functions ---
    function renderNetworkBoxesTable() {
        networkBoxesTableBody.innerHTML = ''; // Clear existing rows

        if (networkBoxes.length === 0) {
            networkBoxesTableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="px-6 py-4 text-center text-gray-400">
                        No network boxes found. Click 'Add New Box' to get started!
                    </td>
                </tr>
            `;
            return;
        }

        networkBoxes.forEach(box => {
            let connectionTypeClasses = '';
            if (box.connectionType && box.connectionType.toLowerCase() === 'lite') {
                connectionTypeClasses = 'bg-green-400 text-green-800 dark:bg-green-800 dark:text-green-100';
            } else if (box.connectionType && box.connectionType.toLowerCase() === 'lhg') {
                connectionTypeClasses = 'bg-blue-400 text-blue-800 dark:bg-blue-800 dark:text-blue-100';
            } else {
                connectionTypeClasses = 'bg-gray-500 text-gray-100 dark:bg-gray-600 dark:text-gray-200'; // Neutral default for custom types
            }

            const row = document.createElement('tr');
            row.className = 'hover:bg-gray-700 transition-colors duration-150';
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">${box.boxNumber}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${box.switches}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${connectionTypeClasses}">
                        ${box.connectionType}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <a href="https://www.google.com/maps?q=${box.latitude},${box.longitude}" target="_blank" class="text-gray-300 hover:text-indigo-400 transition-colors duration-150" aria-label="View address on Google Maps">
                        ${box.address}
                    </a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <a href="https://www.google.com/maps?q=${box.latitude},${box.longitude}" target="_blank" class="text-gray-300 hover:text-indigo-400 transition-colors duration-150 inline-flex items-center" aria-label="View location on Google Maps">
                        ${box.locationName}
                        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                    </a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${box.subscribers.length}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button data-id="${box.id}" class="edit-box-btn text-blue-400 hover:text-blue-300 mr-3 transition-colors duration-150">Edit</button>
                    <button data-id="${box.id}" class="manage-subscribers-btn text-green-400 hover:text-green-300 mr-3 transition-colors duration-150">Manage Subscribers</button>
                    <button data-id="${box.id}" class="delete-box-btn text-red-400 hover:text-red-300 transition-colors duration-150">Delete</button>
                </td>
            `;
            networkBoxesTableBody.appendChild(row);
        });
    }

    function updateStatistics() {
        const totalBoxes = networkBoxes.length;
        const totalSubscribers = networkBoxes.reduce((sum, box) => sum + box.subscribers.length, 0);
        const totalSwitches = networkBoxes.reduce((sum, box) => sum + box.switches, 0);
        const liteConnections = networkBoxes.filter(box => box.connectionType && box.connectionType.toLowerCase() === 'lite').length;

        statTotalBoxes.textContent = totalBoxes;
        statTotalSubscribers.textContent = totalSubscribers;
        statTotalSwitches.textContent = totalSwitches;
        statLiteConnections.textContent = liteConnections;
    }

    function renderSubscribersList(subscribers) {
        subscribersList.innerHTML = '';
        if (subscribers.length === 0) {
            subscribersList.innerHTML = '<li class="text-gray-400 text-sm">No subscribers yet.</li>';
            return;
        }
        subscribers.forEach((name, index) => {
            const li = document.createElement('li');
            li.className = 'flex items-center justify-between bg-gray-700 p-2 rounded-md';
            li.innerHTML = `
                <span class="text-gray-100">${name}</span>
                <button data-index="${index}" class="remove-single-subscriber-btn text-red-400 hover:text-red-300 transition-colors duration-150 p-1 rounded-full hover:bg-gray-600" aria-label="Remove subscriber ${name}">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            `;
            subscribersList.appendChild(li);
        });
    }

    // --- Modal Control Functions ---
    function openModal(modalElement) {
        modalElement.classList.remove('hidden');
        modalElement.setAttribute('aria-modal', 'true');
        modalElement.setAttribute('role', 'dialog');
        // Trap focus (basic implementation)
        const focusableElements = modalElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }

    function closeModal(modalElement) {
        modalElement.classList.add('hidden');
        modalElement.removeAttribute('aria-modal');
        modalElement.removeAttribute('role');
    }

    // --- Event Handlers ---

    // Add Box Button
    addBoxBtn.addEventListener('click', () => {
        editingBoxId = null; // Ensure we're adding a new box, not editing
        boxModalTitle.textContent = 'Add New Network Box';
        boxForm.reset(); // Clear form for new entry
        // Set default values for numbers to avoid empty string issues
        document.getElementById('switches-count').value = 0;
        document.getElementById('latitude').value = '';
        document.getElementById('longitude').value = '';
        document.getElementById('connection-type').value = 'LHG'; // Default for new box
        // Show initial subscribers field for new box
        initialSubscribersGroup.classList.remove('hidden');
        initialSubscribersTextarea.value = ''; // Clear it
        openModal(boxModal);
    });

    // Cancel Box Modal
    cancelBoxModalBtn.addEventListener('click', () => {
        closeModal(boxModal);
        editingBoxId = null; // Reset editing state
        initialSubscribersGroup.classList.add('hidden'); // Hide on cancel
    });

    // Box Form Submission (Add/Edit)
    boxForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(boxForm);
        const boxData = {
            boxNumber: formData.get('boxNumber'),
            switches: parseInt(formData.get('switches') || '0'),
            connectionType: formData.get('connectionType'),
            address: formData.get('address'),
            locationName: formData.get('locationName'),
            latitude: parseFloat(formData.get('latitude')),
            longitude: parseFloat(formData.get('longitude'))
        };

        // Basic validation for lat/lng
        if (isNaN(boxData.latitude) || isNaN(boxData.longitude)) {
            alert('Please enter valid numbers for Latitude and Longitude.');
            return;
        }

        let subscribersArray = [];
        if (!editingBoxId) { // Only process initial subscribers for new boxes
            const initialSubscribersString = formData.get('initialSubscribers');
            if (initialSubscribersString) {
                subscribersArray = initialSubscribersString.split(',').map(name => name.trim()).filter(name => name !== '');
            }
        }

        if (editingBoxId) {
            // Edit existing box
            const boxIndex = networkBoxes.findIndex(b => b.id === editingBoxId);
            if (boxIndex !== -1) {
                networkBoxes[boxIndex] = { ...networkBoxes[boxIndex], ...boxData };
            }
        } else {
            // Add new box
            const newBox = {
                id: 'box-' + Date.now(), // Simple unique ID
                ...boxData,
                subscribers: subscribersArray // Use parsed initial subscribers
            };
            networkBoxes.push(newBox);
        }
        saveNetworkBoxes();
        renderNetworkBoxesTable();
        updateStatistics();
        closeModal(boxModal);
        editingBoxId = null; // Reset editing state
        initialSubscribersGroup.classList.add('hidden'); // Hide after submission
    });

    // Table Action Buttons (Delegation)
    networkBoxesTableBody.addEventListener('click', (e) => {
        const target = e.target;
        const boxId = target.dataset.id;

        if (!boxId) return;

        // Edit Box Button
        if (target.classList.contains('edit-box-btn')) {
            const box = networkBoxes.find(b => b.id === boxId);
            if (box) {
                editingBoxId = boxId;
                boxModalTitle.textContent = 'Edit Network Box';
                document.getElementById('box-number').value = box.boxNumber;
                document.getElementById('connection-type').value = box.connectionType;
                document.getElementById('address').value = box.address;
                document.getElementById('location-name').value = box.locationName;
                document.getElementById('latitude').value = box.latitude;
                document.getElementById('longitude').value = box.longitude;
                document.getElementById('switches-count').value = box.switches;
                // Hide initial subscribers field when editing
                initialSubscribersGroup.classList.add('hidden');
                openModal(boxModal);
            }
        }

        // Manage Subscribers Button
        if (target.classList.contains('manage-subscribers-btn')) {
            const box = networkBoxes.find(b => b.id === boxId);
            if (box) {
                currentBoxIdForSubscribers = boxId;
                subscriberBoxNumberSpan.textContent = box.boxNumber;
                renderSubscribersList(box.subscribers);
                newSubscriberNameInput.value = ''; // Clear input for new name
                openModal(subscriberModal);
            }
        }

        // Delete Box Button
        if (target.classList.contains('delete-box-btn')) {
            const box = networkBoxes.find(b => b.id === boxId);
            if (box) {
                boxToDeleteId = boxId;
                deleteBoxNumberSpan.textContent = box.boxNumber;
                openModal(deleteConfirmModal);
            }
        }
    });

    // Add New Subscriber Button in Modal
    addNewSubscriberBtn.addEventListener('click', () => {
        const subscriberName = newSubscriberNameInput.value.trim();
        if (subscriberName) {
            const boxIndex = networkBoxes.findIndex(b => b.id === currentBoxIdForSubscribers);
            if (boxIndex !== -1) {
                networkBoxes[boxIndex].subscribers.push(subscriberName);
                saveNetworkBoxes();
                renderSubscribersList(networkBoxes[boxIndex].subscribers);
                updateStatistics();
                newSubscriberNameInput.value = ''; // Clear input
            }
        }
    });

    // Remove Single Subscriber Button (delegated from subscribersList)
    subscribersList.addEventListener('click', (e) => {
        if (e.target.closest('.remove-single-subscriber-btn')) {
            const button = e.target.closest('.remove-single-subscriber-btn');
            const subscriberIndex = parseInt(button.dataset.index);

            const boxIndex = networkBoxes.findIndex(b => b.id === currentBoxIdForSubscribers);
            if (boxIndex !== -1 && !isNaN(subscriberIndex) && networkBoxes[boxIndex].subscribers[subscriberIndex]) {
                networkBoxes[boxIndex].subscribers.splice(subscriberIndex, 1);
                saveNetworkBoxes();
                renderSubscribersList(networkBoxes[boxIndex].subscribers);
                updateStatistics();
            }
        }
    });

    // Cancel/Done Subscriber Modal
    cancelSubscriberModalBtn.addEventListener('click', () => {
        closeModal(subscriberModal);
        currentBoxIdForSubscribers = null;
    });

    // Confirm Delete Button
    confirmDeleteBtn.addEventListener('click', () => {
        networkBoxes = networkBoxes.filter(box => box.id !== boxToDeleteId);
        saveNetworkBoxes();
        renderNetworkBoxesTable();
        updateStatistics();
        closeModal(deleteConfirmModal);
        boxToDeleteId = null;
    });

    // Cancel Delete Button
    cancelDeleteBtn.addEventListener('click', () => {
        closeModal(deleteConfirmModal);
        boxToDeleteId = null;
    });

    // Close modals when clicking outside (on the overlay)
    [boxModal, subscriberModal, deleteConfirmModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
                // Reset specific states if needed
                if (modal === boxModal) {
                    editingBoxId = null;
                    initialSubscribersGroup.classList.add('hidden'); // Hide on outside click
                }
                if (modal === subscriberModal) currentBoxIdForSubscribers = null;
                if (modal === deleteConfirmModal) boxToDeleteId = null;
            }
        });
    });

    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!boxModal.classList.contains('hidden')) {
                closeModal(boxModal);
                editingBoxId = null;
                initialSubscribersGroup.classList.add('hidden'); // Hide on escape
            }
            if (!subscriberModal.classList.contains('hidden')) {
                closeModal(subscriberModal);
                currentBoxIdForSubscribers = null;
            }
            if (!deleteConfirmModal.classList.contains('hidden')) {
                closeModal(deleteConfirmModal);
                boxToDeleteId = null;
            }
        }
    });

    // --- Initial Load ---
    loadNetworkBoxes();
    renderNetworkBoxesTable();
    updateStatistics();
});
document.getElementById("searchInput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const rows = document.querySelectorAll("#network-boxes-table-body tr");

    rows.forEach(row => {
        row.innerText.toLowerCase().includes(value)
            ? row.classList.remove("hidden")
            : row.classList.add("hidden");
    });
});
