all: first

first: first.o
	g++ -o first first.o

first.o: first.cpp 
	g++ -c first.cpp

clean:
	rm first first.o