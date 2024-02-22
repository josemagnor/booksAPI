class CreateBookService{
    async handle(){
        return(console.log("create book service"))
    }
}
class GetBookService{
    async handle(){
        return(console.log("get book service"))
    }
}
class UpdateBookService{
    async handle(){
        return(console.log("upadate book service"))
    }
}

class DeleteBookService{
    async handle(){
        return(console.log("delete book service"))
    }
}

export {CreateBookService, DeleteBookService,UpdateBookService,GetBookService}