import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
  export class MyserviceService {
    constructor(private _http : HttpClient) { }
  
    submitRegister(body:any){
      return this._http.post('http://127.0.0.1:5000/register' , body,{
        observe:'body'
      });
    }

    submitLogin(body:any){
      return this._http.post('http://127.0.0.1:5000/login',body,{
        observe:'body'
      });
    }
    addToForm(body:any){
      return this._http.post('http://127.0.0.1:5000/insert',body,{
        observe:'body'
      })
    }
    viewAudioTable(){
      return this._http.get('http://127.0.0.1:5000/view_audios')
    }
    deleteAudio(track_id:any){
      return this._http.delete(`http://127.0.0.1:5000/delete/${track_id}`)
    }
    updateAudio(track_id:any,body:any){
      return this._http.put(`http://127.0.0.1:5000/update/${track_id}`,body,{
        observe:'body'
      })
    }

  //user part
    userViewAudios(){
      return this._http.get('http://127.0.0.1:5000/view_audios')
    }
    userViewOneAudio(track_id:any){
      return this._http.get(`http://127.0.0.1:5000/view_audio/${track_id}}`)
    }
    // addRating(track_id:any, body:any){
    //   return this._http.post(`http://127.0.0.1:5000/add_rating/${track_id}}`,body,{
    //   observe:'body'})
      

    // }


 
  }
