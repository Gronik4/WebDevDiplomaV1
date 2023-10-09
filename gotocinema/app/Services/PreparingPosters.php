<?php

namespace App\Services;

use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class PreparingPosters
{
  public function addPosters($img) {
    $posterC=Image::make($img)->resize(246, 348);
    $posterA=Image::make($img)->resize(78, 104); // Нужно для каждого, иначе они одинакового размера
    $nameAImg=uniqid('ptrA_').'.png'; // Имя картинки для админ панели
    $nameCImg=uniqid('ptrC_').'.png'; // Имя картинки для клиента
    $posterC->save('i/posters/'.$nameCImg);
    $posterA->save('img/posters/'.$nameAImg);
    return [$nameAImg, $nameCImg];
  }

  public function deletePostres($object) {
    File::delete(base_path('public/img/posters/'.$object['posterAd']));
    File::delete(base_path('/public/i/posters/'.$object['posterMain']));
  }
}
