import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private originWord: string;

  constructor(private http: HttpClient) {}
  /**
   * save_word
   */
  public save_word() {
   console.log(this.originWord);
  }
}
