import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Exercises: Angular Lesson 3';

  takeOffEnabled: boolean = false;
  color: string = 'green';
  height: number = 0;
  message: string = 'Space shuttle ready for takeoff!';

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      rocketImage.style.bottom = '10px';
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = true;
    }
  }

  handleLand(rocketImage) {
    this.color = 'green';
    this.height = 0;
    rocketImage.style.bottom = this.height + 'px';
    this.message = 'Shuttle has landed.';
    this.takeOffEnabled = false;
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
      this.color = 'red';
      this.height = 0;
      this.message = 'Mission aborted.';
      this.takeOffEnabled = false;
    }
  }

  moveRocket(rocketImage, direction: string) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
    }

    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
    }

    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }

    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }

}
