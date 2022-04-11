import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://i1.sndcdn.com/artworks-000080583661-0866k3-t500x500.jpg';
  image2 = 'https://dafb3cv85j5xj.cloudfront.net/blog/wp-content/uploads/2016/07/bananya_feat.jpg';
  image3 = 'https://m.media-amazon.com/images/M/MV5BYjlhNTA3Y2ItYjhiYi00NTBiLTg5MDMtZDJjMDZjNzVjNjJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg';

  constructor() { }

  ngOnInit() {
  }

}