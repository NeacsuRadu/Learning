; -------------------
; Strlen subroutine -
; r12-15 rbx, rbp   -
; -------------------

global  _start 

section     .text 

strlen:                                                     ; function that computes length of string in rdi
        mov rax, rdi                                        ; pointer to string is expected to be in rdi 
        mov rcx, rax                                        ; init both of them with the address of the string 
loop:   
        cmp byte[rax], 0                                    ; check if the current character is 0 
        je endstr                                           ; if is 0, jump to end and return 
        inc rax                                             ; move rax to the next position 
        jmp loop                                            ; loop again 
endstr:  
        sub rax, rcx                                        ; subtract the pointers 
        ret


_start:
        mov rdi, message                                    ; passes the message parameter in the rdi register 
        call strlen                                         ; calls strlen 

        mov rdx, rax                                        ; get the return from strlen 
        mov rax, 1                                          ; sys write 
        mov rdi, 1                                          ; stdout 
        mov rsi, message                                    ; message param for write
        syscall         

        mov rax, 60                                         ; sys_exit 
        syscall
        

section     .data
message: 
            db "Hello, brave new world and have a great day", 10, 0              ; needs 0 to finish strlen 