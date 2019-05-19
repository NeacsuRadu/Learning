; -------------------------------------------------------
; USEFULL FUNCTIONS THROUGHOUT THE TUTORIAL             -
; -------------------------------------------------------


; -------------------------------------------------------
; void print (char * string)                            -
;   = expects a null terminated string in rdi register  -
; -------------------------------------------------------
print: 
        call strlen

        mov rdx, rax
        mov rax, 1
        mov rsi, rdi
        mov rdi, 1 
        syscall
        ret 

; -------------------------------------------------------
; void printl(char * string)                            -
;    = prints a string and a new line at the end        -
; -------------------------------------------------------
printl:
        call print

        mov rax, 10 
        push rax
        mov rdi, rsp
        call print 
        pop rax
        ret


; -------------------------------------------------------
; int strlen (char * string)                            -
;   = expects a null terminated string in rdi register  -
;   = returns the lenght of the string                  -
; -------------------------------------------------------
strlen: 
        mov rax, rdi
        mov rcx, rax
loop:   
        cmp byte[rax], 0
        je done  
        inc rax
        jmp loop
done:   
        sub rax, rcx
        ret

; -------------------------------------------------------
; void quit()                                           -
;    = sys_exit                                         -
; -------------------------------------------------------
quit: 
        mov eax, 60                                 ; sys_exit code 
        mov rdi, 0                                  ; return value 
        syscall