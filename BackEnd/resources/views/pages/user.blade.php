@extends('layouts.master')
@section('tittle')
    {{ $title }}
@endsection

@section('content')
    <main id="main" class="main">
        @if (session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="bi bi-check-circle me-1"></i>
                {{ session('success') }}
                {{ session()->forget('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif
        @if (session('warning'))
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <i class="bi bi-exclamation-triangle me-1"></i>
                {{ session('warning') }}
                {{ session()->forget('warning') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif
        <div class="pagetitle">
            <h1>Users</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="\dashboard">Dashboard</a></li>
                    <li class="breadcrumb-item active">Users</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->
        <section class="section dashboard">
            <div class="col-xxl-4 col-md-12">
                <div class="card info-card revenue-card">

                    <div class="filter">
                        <a class="icon text-primary userlist_add-btn" href="{{ route('user.create') }}"><i
                                class="bi bi-plus-circle"></i></a>
                    </div>

                    <form action="" method="post">
                        @csrf
                        {{-- @method('DELETE') --}}
                        <div class="card-body">
                            <h5 class="card-title">Uses <span>|
                                    List</span></h5>
                            <button type="submit" class="btn btn-danger">
                                <i class="bi bi-trash"></i>
                            </button>
                            <div class="d-flex align-items-center">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">#</th>
                                            <th scope="col">name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($users as $key => $user)
                                            <tr>
                                                <th scope="row">
                                                    <div class="form-check">
                                                        <input id="id" class="form-check-input user-check"
                                                            type="checkbox" name="id" id="flexCheckDefault">
                                                    </div>
                                                </th>
                                                <th scope="row">{{ ++$key }}</th>
                                                <td>{{ $user->name }}</td>
                                                <td>{{ $user->email }}</td>
                                                <td>{{ $user->user_roles }}</td>
                                                <td>{{ $user->phone_number }}</td>
                                                <td style="width: 176px;">
                                                    <a class="btn btn-outline-info user_list_btn"
                                                        href="{{ route('user.show', ['id' => $user->id]) }}">
                                                        <i class="bi bi-person-vcard"></i>
                                                    </a>
                                                    <a class="btn btn-outline-success user_list_btn"
                                                        href="{{ route('user.edit', ['id' => $user->id]) }}">
                                                        <i class="bi bi-pencil-square"></i>
                                                    </a>
                                                    <button type="button" class="btn btn-outline-danger user_list_btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal{{ $user->id }}">
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <!-- Modal -->
                                            <form action="" method="post">
                                                @csrf
                                                @method('DELETE')
                                                <div class="modal fade" id="exampleModal{{ $user->id }}" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">
                                                                    Remove</h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                Are you sure you want to remove user
                                                                <b> {{ $user->name }} </b>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="submit"
                                                                    class="btn btn-danger w-100px">Remove</button>
                                                                <button type="button" class="btn btn-secondary w-100px"
                                                                    data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                {{ $users->links() }}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
@endsection
