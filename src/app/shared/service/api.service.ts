import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { PostAlterDTO } from '../dto/post-alter.dto';
import { PostSaveDTO } from '../dto/post-save.dto';
import { PostModel } from '../model/post.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private urlAPI = 'http://localhost:8081/v1/post';

    constructor(private httpClient: HttpClient) { }

    listPost(): Observable<PostModel[]> {
        return this.httpClient.get(`${this.urlAPI}`).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => response as PostModel[])
        )
    }

    getPost(id: number): Observable<PostModel> {
        return this.httpClient.get(`${this.urlAPI}/${id}`).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => response as PostModel)
        )
    }

    getEmptyDefaultImage(): Observable<File> {
        return this.httpClient.get(`assets/empty.jpg`, { responseType: 'blob' }).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => {
                return new File([response], 'empty.jpg', { type: 'image/jpg' });
            })
        )
    }

    savePost(post: PostSaveDTO): Observable<PostModel> {
        return this.httpClient.post(`${this.urlAPI}`, post).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => response as PostModel)
        )
    }

    alterPost(id: number, post: PostAlterDTO): Observable<PostModel> {
        return this.httpClient.put(`${this.urlAPI}/${id}`, post).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => response as PostModel)
        )
    }

    deletePost(id: number): Observable<PostModel> {
        return this.httpClient.delete(`${this.urlAPI}/${id}`).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => response as PostModel)
        )
    }

}