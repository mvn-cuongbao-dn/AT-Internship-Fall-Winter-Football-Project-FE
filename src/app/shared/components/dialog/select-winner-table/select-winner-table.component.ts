import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { END_POINT } from 'src/app/shared/services/api-registry';

@Component({
  selector: 'app-select-winner-table',
  templateUrl: './select-winner-table.component.html',
  styleUrls: ['./select-winner-table.component.scss']
})
export class SelectWinnerTableComponent implements OnInit {

  @Input() tableData: [];
  @Output() close = new EventEmitter();
  selectedOption = [];
  positions = [1, 2, 3, 4];
  isDisabledSubmit_btn = false;
  constructor(private apiService: ApiService) {
    for (let index = 0; index < 4; index++) {
      this.selectedOption[index] = index + 1;
    }
  }

  ngOnInit() {
  }

  closeModal() {
    this.close.emit();
  }

  onSubmit(form) {
    this.tableData.map((x, i) => {
      // x.position = this.selectedOption[i];
    });
    console.log(this.tableData);
    
    // if (!this.isDisabledSubmit_btn) {
    //   let url = [END_POINT.schedules + '/set-knockout'];
    //   this.apiService.post(url, this.selectedOption)
    //     .subscribe(code => {
    //       if (code === 200) {
    //         this.closeModal();
    //       } else {
    //         this.closeModal();
    //         swal({
    //           // buttons: false,
    //           text: 'Time out to Set knockout!',
    //           icon: "error",
    //           timer: 2000,
    //         });
    //       }
    //       swal({
    //         // buttons: false,
    //         text: `You have submit successfully !`,
    //         icon: "success",
    //         timer: 2000,
    //       });
    //     });
    // }
  }

  changeSelected(value: number | string) {
    if (this.isValidatedForm(value)) {
      this.isDisabledSubmit_btn = false;
    } else {
      this.isDisabledSubmit_btn = true;
    }
  }

  isValidatedForm(value: number | string): boolean {
    let count = 0;
    this.selectedOption.forEach(x => {
      if (value == x) count++;
      if (count == 2) return;
    });
    return count != 2;
  }
}