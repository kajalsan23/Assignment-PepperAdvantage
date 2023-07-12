import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private data: any[] = [
    {
      user_id: '1',
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut convallis ipsum. Praesent a massa tincidunt, euismod turpis sed, rutrum arcu. Nulla eu maximus dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at. Vestibulum ut ex ante. Nulla porta arcu a ex placerat commodo. Integer scelerisque sodales lectus eget laoreet. Fusce sit amet mi id risus condimentum commodo.',
      rating: 4,
      date: '14/06/2023',
    },
    {
      user_id: '2',
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut convallis ipsum. Praesent a massa tincidunt, euismod turpis sed, rutrum arcu. Nulla eu maximus dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at.',
      rating: 4,
      date: '14/06/2023',
    },
    {
      user_id: '3',
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut convallis ipsum. Praesent a massa tincidunt, euismod turpis sed, rutrum arcu. Nulla eu maximus dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at. Vestibulum ut ex ante. Nulla porta arcu a ex placerat commodo. Integer scelerisque sodales lectus eget laoreet. Fusce sit amet mi id risus condimentum commodo.',
      rating: 4,
      date: '14/06/2023',
    },
    {
      user_id: '4',
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut convallis ipsum. Praesent a massa tincidunt, euismod turpis sed, rutrum arcu. Nulla eu maximus dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at. Vestibulum ut ex ante. Nulla porta arcu a ex placerat commodo. Integer scelerisque sodales lectus eget laoreet. Fusce sit amet mi id risus condimentum commodo.',
      rating: 4,
      date: '14/06/2023',
    },
    {
      user_id: '5',
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut convallis ipsum. Praesent a massa tincidunt, euismod turpis sed, rutrum arcu. Nulla eu maximus dui. Cras pulvinar fringilla mi, nec cursus sem ullamcorper at.',
      rating: 4,
      date: '14/06/2023',
    },
  ];
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    this.data
  );

  constructor(private http: HttpClient) {}

  getData(): BehaviorSubject<any[]> {
    return this.dataSubject;
  }

  postData(item: any): void {
    this.data.push(item);
    this.dataSubject.next(this.data);
  }

  // Login

  private loggedInStatus = JSON.parse(
    localStorage.getItem('loggedIn') || 'false'
  );

  setLoginStatus(value: any) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get LoginStatus() {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.loggedInStatus.toString()
    );
  }
  logInUser() {
    let loginCred = {
      email: 'Kajal',
      password: '12345678',
    };
    return localStorage.setItem('login', JSON.stringify(loginCred));
  }
}
