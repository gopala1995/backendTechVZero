import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from './schema/employee-schema';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async getAll() {
    return await this.employeeModel.find().exec();
  }
  async create(employee: Employee) {
    const newEmployee = new this.employeeModel(employee);
    await newEmployee.save();
  }
  async getById(id: string) {
    return await this.employeeModel.findById(id).exec();
  }

  async update(id: string, employee: Employee) {
    return await this.employeeModel.findByIdAndUpdate(id, employee, {
      new: true,
    });
  }

  async delete(id: string) {
    return await this.employeeModel.findByIdAndDelete(id);
  }
}
