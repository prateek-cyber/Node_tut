// call stack -> Node API -> callback queue

// functions which are called are stored in call stack.(Just like a regular stack). 
// functions that are derived from other languages i.e other than javascript, like c, c++
// are stored in node API. Example of these function are settimeout. These functions are sent 
// from Node Api to callback queue where it waits until all the functions in the call stack 
// finish executing. after that these are executed. They are brought to callback queue in 
// ascending order of their execution time.