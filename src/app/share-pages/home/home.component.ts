import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // constructor() { }
  // ngOnInit(): void { }
   
  // imgCollection: Array<object> = [
  //     {
  //       image: 'https://t.ly/7UKhE',
      
  //       alt: 'Image 1',
  //       title: 'Image 1'
  //     }, {
  //       image:'https://www.shutterstock.com/shutterstock/photos/2140579723/display_1500/stock-vector-motor-oil-bottle-with-splash-and-drops-car-engine-synthetic-or-mineral-oil-change-service-vector-2140579723.jpg',
       
  //       title: 'Image 2',
  //       alt: 'Image 2'
  //     }, {
  //       image: 'https://www.castrol.com/content/dam/castrol/business-sites-new/en/global/corporate/images/products/edge/product_finder.jpg.img.500.medium.jpg',
      
  //       title: 'Image 3',
  //       alt: 'Image 3'
  //     }, {
  //       image: 'https://loremflickr.com/600/400/brazil,rio',

  //       title: 'Image 4',
  //       alt: 'Image 4'
  //     }, {
  //       image: 'https://loremflickr.com/600/400/paris,girl/all',
       
  //       title: 'Image 5',
  //       alt: 'Image 5'
  //     }, {
  //       image: 'https://loremflickr.com/600/400/brazil,rio',
       
  //       title: 'Image 6',
  //       alt: 'Image 6'
  //     }
  // ];
  
  name = 'Angular';
  imgCollection = [{
      image: 'https://t.ly/lrJY9',
      thumbImage: 'https://t.ly/lrJY9',
     
  }, {
      image: 'https://t.ly/zngHd',
      thumbImage: 'https://t.ly/zngHd'
  }, {
      image: 'https://t.ly/3WwAX',
      thumbImage: 'https://t.ly/3WwAX',
    
  },{
      image: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-genuine-oil/motor-engine-oil.jpg',
      thumbImage: 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-genuine-oil/motor-engine-oil.jpg',
    
  }, {
      image: 'https://5.imimg.com/data5/GLADMIN/Default/2022/12/IJ/WQ/TE/5108015/semi-synthetic-car-and-bike-engine-oil-500x500.jpg',
      thumbImage: 'https://5.imimg.com/data5/GLADMIN/Default/2022/12/IJ/WQ/TE/5108015/semi-synthetic-car-and-bike-engine-oil-500x500.jpg'
  }, {
      image: 'https://previews.123rf.com/images/avgust01/avgust011810/avgust01181000034/110892322-engine-oil-advertisement-banner-vector-illustration-with-realistic-pistons-and-motor-oil-on-bright.jpg',
      thumbImage: 'https://previews.123rf.com/images/avgust01/avgust011810/avgust01181000034/110892322-engine-oil-advertisement-banner-vector-illustration-with-realistic-pistons-and-motor-oil-on-bright.jpg',
     
  }];
}

