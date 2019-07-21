#include <iostream>

/*
int global_int = 8;
    --- compilation error - multiple definition 
*/

extern int global_int; // = 11; -> multiple definition of global int 
const int global_const_int = 10;

extern const int other_global_const_int;

/*
extern constexpr int y2;
    --- constexpr is applied only to definitions 
*/

void afisare()
{
    std::cout << "global_const_int: " << global_const_int << std::endl
              << "global_int: " << global_int << std::endl
              << "other_global_const_int: " << other_global_const_int << std::endl;
} 
