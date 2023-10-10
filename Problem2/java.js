var app = {
    elements: {
        title: document.getElementById('title'),
        message: document.getElementById('message'),
        color: document.getElementById('color'),
        addButton: document.getElementById('btn'),
        errorDisplay: document.getElementById('error'),
        notes: document.getElementById('notes')
    },
    editMode: false,

    init: function () {
        this.elements.title.addEventListener('focus', this.clearError.bind(this));
        this.elements.message.addEventListener('focus', this.clearError.bind(this));

        this.elements.title.addEventListener('input', this.detectInput.bind(this));
        this.elements.message.addEventListener('input', this.detectInput.bind(this));

        this.elements.addButton.addEventListener('click', this.createOrUpdateNote.bind(this));
    },
    detectInput: function () {
        this.elements.addButton.innerText = (this.elements.title.value && this.elements.message.value) ? 'Create Note' : 'Missing Values';
    },
    clearError: function () {
        this.elements.title.classList.remove('is-empty');
        this.elements.message.classList.remove('is-empty');
        this.elements.errorDisplay.innerHTML = '';
    },
    createOrUpdateNote: function () {
        if (!this.elements.title.value || !this.elements.message.value) {
            this.showError('Missing Values');
            return;
        }

        var note = {
            title: this.elements.title.value,
            message: this.elements.message.value,
            color: this.elements.color.value
        };

        if (this.editMode) {
            this.updateNote(note);
        } else {
            this.addNote(note);
        }
    },
    showError: function (message) {
        this.elements.errorDisplay.innerHTML = '<span>' + message + '</span>';
        if (!this.elements.title.value) {
            this.elements.title.classList.add('is-empty');
        }
        if (!this.elements.message.value) {
            this.elements.message.classList.add('is-empty');
        }
    },
    addNote: function (note) {
        var li = this.createNoteElement(note);
        this.elements.notes.prepend(li);
        this.clearForm();
    },
    createNoteElement: function (note) {
        var li = document.createElement('li');
        li.className = note.color;

        li.innerHTML = `
            <span class="delete"><i class="fa fa-trash-o"></i></span>
            <span class="note-title">${note.title}</span>
            <span class="note-message">${note.message}</span>
            <footer><span class="edit"><i class="fa fa-pencil-square-o"></i> Edit</span></footer>
        `;

        li.querySelector('.delete').addEventListener('click', this.deleteNote.bind(this));
        li.querySelector('.edit').addEventListener('click', this.editNote.bind(this));

        return li;
    },
    clearForm: function () {
        this.elements.title.value = '';
        this.elements.message.value = '';
        this.elements.addButton.innerText = 'Create Note';
        this.elements.title.classList.remove('is-empty');
        this.elements.message.classList.remove('is-empty');
    },
    editNote: function (event) {
        var li = event.target.closest('li');
        var titleElement = li.querySelector('.note-title');
        var messageElement = li.querySelector('.note-message');
        var color = li.className;

        this.elements.title.value = titleElement.innerText;
        this.elements.message.value = messageElement.innerText;
        this.elements.color.value = color;

        this.editMode = true;
        this.elements.addButton.innerText = 'Save Changes';
        this.deleteNote.call(event.target); 
    },
    updateNote: function (note) {
        this.addNote(note);
        this.editMode = false;
        this.elements.addButton.innerText = 'Create Note';
    },
    deleteNote: function () {
        var li = event.target.closest('li');
        li.remove();
    }
};

app.init();
