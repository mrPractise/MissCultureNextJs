from rest_framework import serializers
from .models import (
    Ambassador, CulturalCommunity, CulturalHeritage, KenyaRegion,
    Achievement, BlogPost, Partner, SocialMediaPost
)


class AmbassadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambassador
        fields = '__all__'


class CulturalCommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = CulturalCommunity
        fields = '__all__'


class CulturalHeritageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CulturalHeritage
        fields = '__all__'


class KenyaRegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = KenyaRegion
        fields = '__all__'


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = '__all__'


class SocialMediaPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaPost
        fields = '__all__'
