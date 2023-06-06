import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConstants, RouteConstants } from 'src/app/Core/constants/app-constants';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { Tool } from 'src/app/Core/models/Tool.model';
import { ToolParameter } from 'src/app/Core/models/Tool-parameter.model';
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

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ) { }

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
    this.addToolParameter(parameter);
    this.setIsAddingAdditionalInfo(false);
  }

  addToolParameter(parameter: Partial<ToolParameter>) {
    const newParameter: ToolParameter = {
      id: parameter.id || undefined,
      name: parameter.name!,
      measurementUnitId: parameter.measurementUnitId!,
      measurementUnitSymbol: parameter.measurementUnitSymbol!,
      parameterValue: parameter.parameterValue!
    };

    if (!this.tool || !this.tool.toolParameters) {
      this.tool = {
        ...this.tool,
        toolParameters: [newParameter]
      };
    } else {
      this.tool.toolParameters.push(newParameter);
    };
  }

  addNewTool() {
    if (!this.addNewToolForm!.valid) return;
    
    this.tool = {
      ...this.tool,
      toolName: this.addNewToolForm!.controls["toolName"].value,
    };

    this.httpService.post<Tool>(ApiConstants.toolsApi, this.tool)
      .subscribe(() => this.router.navigateByUrl(`/${RouteConstants.toolsPath}`));
  }

  initAdditionalInformation() {
    this.setIsAddingAdditionalInfo(true);
    this.setIsAddingExistingParameter(false);
    this.setIsAddingNewParameter(false);
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

  setExistingParameter(item: ItemList) {
    this.tempParameter = this.toolParameters!.find(x => x.id == item.id);
    this.setIsAddingExistingParameter(true);
  }
}
