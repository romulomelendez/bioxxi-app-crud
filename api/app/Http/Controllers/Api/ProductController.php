<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return Product::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {

        $validatedProduct = $request->validate([
            'name' => 'required|string|max:255',
            'type' => [
                'required',
                Rule::in('crítico', 'semi-crítico', 'não-crítico')
            ],
            'description' => 'string'
        ]);

        $product = Product::create($validatedProduct);
        return response()->json($product, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        return product::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {
        $product = Product::findOrFail($id);
        $product->update($request->all());

        return $product;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json([
            'message' => 'Product deleted successfully!'
        ], 200);
    }
}
