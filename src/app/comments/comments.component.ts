import {Component, OnInit, Input} from '@angular/core';
import {RecipeDataService} from '../recipe-data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  constructor(private recipeDataService: RecipeDataService) {
  }

  @Input() comments;
  @Input() recipeID;
  loggedIn;
  commentToPost;

  ngOnInit() {
    if (localStorage.getItem('loggedIn')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  public postComment(comment) {
    this.commentToPost = {
      user: localStorage.getItem('username'),
      recipe: this.recipeID,
      text: comment.comment
    };
    this.recipeDataService.postComment(this.commentToPost).subscribe();
  }

}
