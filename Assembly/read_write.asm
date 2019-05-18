; ---------------------------------------------------
; reads a string from stdin and writes it to stdout -
; ---------------------------------------------------

            global          _start 

            section         .text 
_start:     
            mov             rax, 1
            mov             rdi, 1
            mov             rsi, message 
            mov             rdx, 100
            syscall


            mov             rax, 0      ; system call for read
            mov             rdi, 0      ; file descriptor for stdin
            mov             rsi, buffer ; address of buffer   
            mov             rdx, 40     
            syscall 
 
            mov             rax, 1      ; system call for write 
            mov             rdi, 1      ; file descriptor for stdout
            syscall

            mov             rax, 60     ; 
            mov             rdi, 0
            syscall

            section         .data
message:    db              "Write something: ", 10

            section         .bss 
buffer:     resb            40 