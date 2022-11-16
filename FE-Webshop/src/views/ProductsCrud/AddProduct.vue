
    <!--<div style="padding:50px;">
    <h1>Create</h1>

    <h4>Products</h4>
    <hr />
    <div class="row">
        <div class="col-md-4">
            <form asp-action="Create" enctype="multipart/form-data">
                <div asp-validation-summary="ModelOnly" class="text-danger"></div>
                <div class="form-group">
                    <label asp-for="ProductTitle" class="control-label"> ProductTitle</label>
                    <input asp-for="ProductTitle" class="form-control" />
                    <span asp-validation-for="ProductTitle" class="text-danger"></span>
                </div>
               
                <div class="form-group">
                    <label asp-for="ProductDescription" class="control-label"> ProductDescription</label>
                    <input asp-for="ProductDescription" class="form-control" />
                    <span asp-validation-for="ProductDescription" class="text-danger"></span>
                </div>
                <div class="form-group">
                    <label asp-for="ProductPrice" class="control-label"> ProductPrice</label>
                    <input asp-for="ProductPrice" class="form-control" />
                    <span asp-validation-for="ProductPrice" class="text-danger"></span>
                </div>
                <div class="form-group">
                    <label asp-for="ProductQuantity" class="control-label"> ProductQuantity</label>
                    <input asp-for="ProductQuantity" class="form-control" />
                    <span asp-validation-for="ProductQuantity" class="text-danger"></span>
                </div>
                <div class="form-group">
                    <label asp-for="ProductImage" class="control-label"> ProductImage</label>
                    <input asp-for="ProductImage" class="form-control" />
                    <span asp-validation-for="ProductImage" class="text-danger"></span>
                </div>
                <div class="form-group">
                    <label asp-for="ProductSize" class="control-label"> ProductSize</label>
                    <input asp-for="PProductSize" class="form-control" />
                    <span asp-validation-for="ProductSize" class="text-danger"></span>
                </div>
              
                <div class="form-group">
                    <input type="submit" value="Create" class="btn btn-primary" />
                </div>
            </form>
        </div>
    </div>

    <div>
        <a asp-action="Home" class="btn btn-outline-dark">Back to List</a>
    </div>
    </div> -->

    
<template>
    <div>
        <h2>Add new retailer</h2>
        <form v-on:submit.prevent="postProduct()">
            <div class="form-group">
                <label for="productTitle">ProductTitle</label>
                <input type="text" class="form-control" id="productTitle" placeholder="Your productTitle"
                    v-model="form.productTitle" />
            </div>
            <div class="form-group">
                <label for="productDescription">ProductDescription</label>
                <input type="text" class="form-control" id="productDescription" placeholder="Your productDescription"
                    v-model="form.productDescription" />
            </div>

            <div class="form-group">
                <label for="productPrice">ProductPrice</label>
                <input type="text" class="form-control" id="productPrice" placeholder="productPrice"
                    v-model="form.productPrice" />
            </div>

            <div class="form-group">
                <label for="productQuantity">ProductQuantity</label>
                <input type="text" class="form-control" id="productQuantity" placeholder="productQuantity"
                    v-model="form.productQuantity" />
            </div>
            <div class="form-group">
                <label for="productImage">ProductImage</label>
                <input type="text" class="form-control" id="productImage" placeholder="productImage"
                    v-model="form.productImage" />
            </div>

            <div class="form-group">
                <label for="productSize">ProductSize</label>
                <input type="text" class="form-control" id="productSize" placeholder="productSize"
                    v-model="form.productSize" />
            </div>
            <div class="form-group">
                <button id="post" class="post">Create retailer</button>
            </div>
        </form>
    </div>
</template>
      
<script>
import axios from "axios";

export default {
    name: "postProductForm",
    data() {
        return {
            form: {
                productTitle: "",
                productDescription: "",
                productPrice: 0,
                productQuantity: 1,
                productImage: "",
                productSize: "",

            },
        };
    },
    methods: {
        postProduct() {
            const product = {
             
                "productTitle": "kl",
                "productDescription": "kl",
                "productPrice": 2,
                "productQuantity": 2,
                "productImage": "mmml",
                "productSize": "M"
            }
            axios
                .post("https://localhost:7092/api/Products", this.form)
                .then((res) => {
                    console.log('qqqqqqqqqqqqqq');
                    console.log(res);
                })
                .catch((error) => {
                    console.log('wwwwwwwwwwwwwwww');
                    console.log(error);
                    // error.response.status Check status code
                })
                .finally(() => {
                    this.$router.push({ name: "home" });
                });
        },
    },
};
</script>
      
<style scoped>

</style>
      