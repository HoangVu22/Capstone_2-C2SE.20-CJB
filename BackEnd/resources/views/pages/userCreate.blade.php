@extends('layouts.master')
@section('tittle')
    Create
@endsection

@section('content')
    <form method="post" action="{{ route('user.store') }}">
        @csrf
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>{{ $title }}</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                        <li class="breadcrumb-item active"><a href="{{ route('user') }}">Users</a> /
                            Create</li>
                    </ol>
                </nav>
            </div><!-- End Page Title -->

            <section class="section dashboard">
                <div class="col-xxl-4 col-md-12">
                    <div class="card info-card">
                        <div class="filter d-flex">
                            <div class="d-flex justify-content-end me-3">
                                <a href="{{ route('user') }}" class="btn btn-secondary user_form-btn">Back</a>
                            </div>
                            <div class="d-flex justify-content-end me-3">
                                <button type="submit" class="btn btn-primary user_form-btn">Create</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">User <span>| Create</span></h5>
                            <div class="row mb-3">
                                <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="email"
                                        placeholder="Ex: Example@gmail.com" value="{{ old('email') }}">
                                    @error('email')
                                        <div class="invalidate">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" name="password" placeholder="Password">
                                    @error('password')
                                        <div class="invalidate">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-2 col-form-label">Full Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="name" placeholder="Ex: Nguyễn Văn A"
                                        value="{{ old('name') }}">
                                    @error('name')
                                        <div class="invalidate">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputNumber" class="col-sm-2 col-form-label">Phone number</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="phone_number"
                                        placeholder="Ex: 09999999999" value="{{ old('phone_number') }}">
                                    @error('phone_number')
                                        <div class="invalidate">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="user_roles" class="col-sm-2 col-form-label">Role</label>
                                <div class="col-sm-10">
                                    <select class="form-select" name="user_roles" aria-label="Default select example">
                                        <option value="user" selected>User</option>
                                        <option value="ts">Travel Suplier</option>
                                    </select>
                                    @error('roles')
                                        <div class="invalidate">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword" class="col-sm-2 col-form-label">About</label>
                                <div class="col-sm-10">
                                    <textarea class="form-control h-100px" name="about">{{ old('about') }}</textarea>
                                    @error('about')
                                        <div class="invalidate">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </form>
@endsection
