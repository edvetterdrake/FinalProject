import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";

@Injectable()
export class ListViewService {
  lists = [];

  constructor(private apiService: ApiService) {
    this.getAllLists().subscribe();
  }

  getAllLists() {
    return this.apiService.get("/all")
    .do(function(res) {
      this.lists = res;
    }.bind(this));
  }

  createList(list_title) {
    return this.apiService.post("/create", JSON.stringify({
      list: {
        title: list_title,
        items: []
      }
    })).do(function(res) {
      this.lists.push(res);
    }.bind(this));
  }

  addToList(id, new_list_item) {
    return this.apiService.post("/update", JSON.stringify({
      id: id,
      item: new_list_item
    })).do(function(res) {
      console.log(res);
      this.pushToList(id, this.lists, res);
    }.bind(this));
  }

  pushToList(id, orig, new_song) {
    for (let i in orig) {
      if (orig._id === id ) {
        orig[i].item.push(new_song);
      }
    }
  }
}