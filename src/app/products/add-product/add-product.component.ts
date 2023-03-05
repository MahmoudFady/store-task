import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  imagePath!: string | null;
  productForm!: FormGroup;
  //   new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   description: new FormControl('', [Validators.required]),
  //   category: new FormControl('', [Validators.required]),
  //   price: new FormControl('', [Validators.required]),
  //   image: new FormControl(),
  // });
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
      category: this.formBuilder.control('', [Validators.required]),
      price: this.formBuilder.control('', [Validators.required]),
      image: this.formBuilder.control('', [Validators.required]),
    });
  }
  onImagePicked(event: Event) {
    this.imagePath = null;
    const input = event.target as HTMLInputElement;
    const file = input.files![0] as File;
    this.productForm.patchValue({
      image: file,
    });
    this.productForm.get('image')?.updateValueAndValidity();
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.imagePath = fileReader.result as string;
    };
    if (file) {
      fileReader.readAsDataURL(file as File);
    }
  }
  onAddProduct() {
    if (this.productForm.invalid) return;
    const { title, description, price, category, image } =
      this.productForm.value;
    this.productService.addProduct(title, description, category, price, image);
    this.productForm.reset();
    this.imagePath = null;
  }
}
