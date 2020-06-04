<!doctype html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="Authentication forms">
      <meta name="author" content="Arasari Studio">
      <title>Forny</title>
      <link href="{{ asset('auth/css/bootstrap.min.css') }}" rel="stylesheet">
      <link href="{{ asset('auth/css/common.css') }}" rel="stylesheet">
      <link rel="stylesheet" href="{{ asset('auth/css/font-awsome.min.css') }}">
      <link href="https://fonts.googleapis.com/css?family=Rubik:400,600,700&amp;display=swap" rel="stylesheet">
      <link href="{{ asset('auth/css/theme-05.css') }}" rel="stylesheet">
      
   </head>
   <body>
      <div id="app">
         @csrf
         <div>
            @yield('content')
         </div>
      </div>
      <script src="{{ asset('js/app.js') }}"></script>
      <script src="{{ asset('auth/js/jquery.min.js') }}"></script>
      <script src="{{ asset('auth/js/bootstrap.min.js') }}"></script>
      <script src="{{ asset('auth/js/main.js') }}"></script>
      <script src="{{ asset('auth/js/demo.js') }}"></script>
   </body>
</html>