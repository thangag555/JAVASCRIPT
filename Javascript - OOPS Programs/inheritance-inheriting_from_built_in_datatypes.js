class Queue extends Array {
    enqueue(e) {
    super.push(e);
    }
    dequeue() {
    return super.shift();
    }
    peek() {
    return !this.empty() ? this[0] : undefined;
    }
    empty() {
    return this.length === 0;
    }
    }
    let students = new Queue();
    students.enqueue('Jon');
    students.enqueue('Peter');
    students.enqueue('Loki');
    console.log(students.pop()); // Loki