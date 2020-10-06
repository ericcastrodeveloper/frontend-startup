import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { LikeSaveDTO } from '../dto/like-save.dto';
import { LoginDTO } from '../dto/login.dto';
import { PostAlterDTO } from '../dto/post-alter.dto';
import { PostSaveDTO } from '../dto/post-save.dto';
import { UserSaveDTO } from '../dto/user-save.dto';
import { PostModel } from '../model/post.model';
import { UserModel } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private urlApi = 'http://v1-posts:8081/v1/post';
    private urlApiUser = 'http://v1-users:8082/v1/user';

    constructor(private httpClient: HttpClient) { }

    listPost(): Observable<PostModel[]> {
        return this.httpClient.get(`${this.urlApi}`).pipe(
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
        return this.httpClient.get(`${this.urlApi}/${id}`).pipe(
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
        return this.httpClient.post(`${this.urlApi}`, post).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => response as PostModel)
        )
    }

    saveUser(user: UserSaveDTO): Observable<UserModel> {
        return this.httpClient.post(`${this.urlApiUser}`, user).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => response as UserModel)
        )
    }

    logar(user: LoginDTO): Observable<UserModel> {
        return this.httpClient.post(`${this.urlApiUser}/logar`, user).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => response as UserModel)
        )
    }

    alterPost(id: number, post: PostAlterDTO): Observable<PostModel> {
        return this.httpClient.put(`${this.urlApi}/${id}`, post).pipe(
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
        return this.httpClient.delete(`${this.urlApi}/${id}`).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => response as PostModel)
        )
    }

    saveLike(like: LikeSaveDTO): Observable<PostModel> {
        return this.httpClient.post(`${this.urlApi}/${like.idPost}/like`, like).pipe(
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