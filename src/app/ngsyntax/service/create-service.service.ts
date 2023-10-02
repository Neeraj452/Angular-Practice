import { Injectable } from '@angular/core';
interface userType{
  name:string,
  age:number,
  id:number
}

@Injectable({
  providedIn: 'root'  // This makes the service a singleton and provides it globally
})


export class CreateServiceService {

   items: userType[] = []; // Initialize an empty array to store items

  constructor() {}
  
  getData(){
    return {
      name:"peter",
      age:35,
      id:100
    }
  }


  /**
   * Add an item to the list.
   * @param newItem The item to be added.
   */
  // addItem(newItem: string): void {
  //   this.items.push(newItem);
  // }

  /**
   * Get the list of items.
   * @returns An array of items.
   */
  // getItems(): string[] {
  //   return this.items;
  // }

  /**
   * Remove an item from the list.
   * @param index The index of the item to be removed.
   */
  // removeItem(index: number): void {
  //   if (index >= 0 && index < this.items.length) {
  //     this.items.splice(index, 1);
  //   }
  // }
}
