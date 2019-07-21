
int global_int = 5; 

const int global_const_int = 7;

extern const int other_global_const_int; // need to put this here in order to compile ..
const int other_global_const_int = 9;
/*
constexpr int y1 = global_int;
    --- compilation error, cannot initialize constexpr from non const 
*/

constexpr int y2 = 9;

void afisare();

int main()
{
    int local_int = 7;
    static int static_int = 5;

    /*
    constexpr int * local_ptr = &local_int; 
          --- constexpr * cannot be initialized with address from local object 
    */

    constexpr int * null_ptr = nullptr;
    constexpr int * local_sptr = &static_int;

    afisare();
    return 0;
}