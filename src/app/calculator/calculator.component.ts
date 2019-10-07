import { ICalculator } from "./../ICalculator";
import { Component, OnInit } from "@angular/core";
import { CalciContentService } from "../calci-content.service";
@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  calciContent: ICalculator[] = [];

  display: string = " ";
  itemsPerRow: number;
  rows: number[];
  isOperable: boolean = this.display.length > 0 ? true : false;
  constructor(private calciService: CalciContentService) {}

  ngOnInit(): void {
    this.calciService.getCalciContent().subscribe(data => {
      this.calciContent = data;
    });

    this.itemsPerRow = 2;
    this.rows = Array.from(
      Array(Math.ceil(this.calciContent.length / this.itemsPerRow)).keys()
    );
  }

  Operand(digit: string): void {
    this.display += digit;
  }

  Operator(operation: string): void {
    if (this.isOperable) {
      this.display += operation;
      this.isOperable = false;
    } else {
      this.display = eval(this.display);
      this.isOperable = true;
    }

    //console.log(operation + "  " + this.isOperable);
  }
}
