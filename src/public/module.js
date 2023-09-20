"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = __importDefault(require("./student"));
const Teacher_1 = __importDefault(require("./Teacher"));
let student = new student_1.default();
console.warn(student.data);
let teacher = new Teacher_1.default();
console.warn(teacher.data);
