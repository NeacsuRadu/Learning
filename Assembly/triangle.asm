; --------------------------------------------------------
; this file prints a trinagle to the console             - 
; --------------------------------------------------------

        global      _start 

        section     .text

_start: mov         r8, 1           ; use r8 to keep the row we are printing
        mov         r9, 0           ; use r9 to keep how many chars we have in buffer
        mov         r10, buffer     ; keep in rsi what we have to print 
line:   
        mov         byte [r10], '*' ; put a character in the buffer 
        inc         r9              ; increment number the chars in buffer 
        inc         r10             ; increment position in the buffer 
        cmp         r8, r9          ; see if we added enough chars in buffer
        jne         line            ; if they are not equal, add another char
endln:  
        mov         byte [r10], 10  ; print endl and to go next line 
        inc         r8              ; next line 
        inc         r10
        mov         r9, 0           
        cmp         r8, 9
        jne         line 
end:    
        mov         rax, 1          ; syscall write 
        mov         rdi, 1          ; stdout
        mov         rsi, buffer     ; data
        mov         rdx, 44         ; dataSize 
        syscall 

        mov         rax, 60
        mov         rdi, 0
        syscall 

        section     .bss
buffer: resb        64
