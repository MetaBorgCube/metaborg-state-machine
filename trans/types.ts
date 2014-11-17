module types

type rules

  Int(i) : IntType()
  
  False() : BoolType()
  True()  : BoolType()
  
  Var(x) : t
  where definition of x : t

  Or(e1, e2) + And(e1, e2) : BoolType()
  where e1 : BoolType() 
        else error "bool expected" on e1
    and e2 : BoolType()
        else error "bool expected" on e2
          
  Eq(e1, e2) + Gt(e1, e2) : BoolType()
  where e1 : IntType() 
        else error "int expected" on e1
    and e2 : IntType()
        else error "int expected" on e2
  
  Sub(e1, e2) + And(e1, e2) : IntType()
  where e1 : IntType() 
        else error "int expected" on e1
    and e2 : IntType()
        else error "int expected" on e2  

  Assign(x, e) :-
  where x : t1
    and e : t2
    and t1 == t2
        else error "type of expression not compatible" on x
