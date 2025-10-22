from rest_framework import serializers
from .models import PhotoCollection, Photo, Video, GallerySettings


class PhotoCollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoCollection
        fields = '__all__'


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'


class GallerySettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GallerySettings
        fields = '__all__'
