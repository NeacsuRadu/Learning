Parametri:
-o nume_fisier_rezultat # specifica numele targetului
-Wall  					# prints all warning messages
-g 						# ceva pt debug
-c 						# compile into object files, by default names are cpp_name.o
-Idir 					# specify include paths 
-Ldir 					# specify the lib paths 



Comenzi:

g++ -o first first.cpp  # compile into object files and link 

g++ -c first.cpp 		# compile into object files
g++ -o first first.o 	# link with object files and other libs
