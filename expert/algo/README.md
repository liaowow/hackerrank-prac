### Memory

- Bounded (i.e. limited amount of space) canvas of **memory slots** that live somewhere in your computer
- Can store data
- Information/data is stored in **base two (binary)** format as `bits (0s and 1s)`
- One memory slot can fit **8** bits, which is called one `byte (8 bits)`
- When storing an integer in the memory, that integer is typically a **fixed-width** integer, meaning it's either `32 bits` or `64 bits`
- When storing data that's taking more than one memory slot, it needs to be stored back to back and free. E.g. if you have three 32-bit integers, they needs to be stored in 12 back-to-back memory slots.
- Any type of information can be transformed into a base-two format
- **Pointers**: At any memory slot, you can store the memory address of another memory slot in base-two format in binary format. That way, you don't have to store specific data in the memory slot, instead, just **point** to the memory slot with the same data.
- Accessing memory slot is easy, i.e. a very **inexpensive** operation from a time point of view.
