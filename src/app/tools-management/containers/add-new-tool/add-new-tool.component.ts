import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { Tool } from 'src/app/Core/models/Tool.model';
import { ToolParameter } from 'src/app/Core/models/ToolParameter.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-new-tool',
  templateUrl: './add-new-tool.component.html',
  styleUrls: ['./add-new-tool.component.scss']
})
export class AddNewToolComponent implements OnInit {
  isAddingAdditionalInfo = false;
  isAddingExistingParameter = false;
  isAddingNewParameter = false;
  addNewToolForm?: FormGroup;
  tool?: Partial<Tool>;
  toolParameters?: ToolParameter[];
  tempParameter?: ToolParameter;

  items: ItemList[] = [
    {
      id: 1,
      name: "Test"
    },
    {
      id: 2,
      name: "Test2"
    },
    {
      id: 3,
      name: "Test3"
    }
  ];

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getToolParameters();
  }

  getToolParameters(): void {
    this.httpService.get<ToolParameter[]>(ApiConstants.toolParametersApi)
      .subscribe(response => this.toolParameters = response);
  }

  initForm(): void {
    this.addNewToolForm = this.fb.group({
      toolName: [null, Validators.required]
    })
  }

  onAddParameter(parameter: Partial<ToolParameter>) {
    console.log(parameter);
    // this.tool = {
    //   ...this.tool,
    //   toolParameters: this.addToolParameter(parameter)
    // };

    this.setIsAddingAdditionalInfo(false);
  }

  addToolParameter(parameter: ToolParameter) {
    if(!this.tool || !this.tool.toolParameters) {
      this.tool = {
        ...this.tool,
        toolParameters: [parameter]
      };
    }else {
      this.tool.toolParameters.push(parameter);
    }
  }

  onSelectExistingParameter(parameter: ItemList) {
    // this.tempParameter = {
    //   name: 
    // };
  }

  setIsAddingAdditionalInfo(value: boolean): void {
    this.isAddingAdditionalInfo = value;
  }

  setIsAddingExistingParameter(value: boolean): void {
    this.isAddingExistingParameter = value;
  }

  setIsAddingNewParameter(value: boolean): void {
    this.isAddingNewParameter = value;
  }
}
