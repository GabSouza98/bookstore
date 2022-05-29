import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()

export class BookService{

    private url = "http://localhost:8080";
    bookMock1: Book = new Book("1","Harry Potter e as Relíquias da Morte",50,12,"Aventura","https://lojasaraiva.vteximg.com.br/arquivos/ids/12100991/1007806029.jpg?v=637142218414900000");
    bookMock2: Book = new Book("2","Harry Potter e a Ordem da Fenix",49,25,"Aventura","https://images-submarino.b2w.io/produtos/imagens/205050/205051_1GG.jpg");
    booksList: Array<Book> = [this.bookMock1,this.bookMock2];

    httpOptions = {
        Headers: new HttpHeaders( {'content-type':'application/json'})
    }

    constructor(private http:HttpClient) {
    }



    getBook() {
        //return this.http.get(this.url);
        console.log("getBook foi chamado")
        return this.booksList;
    }
}