from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import (
    Ambassador, CulturalCommunity, CulturalHeritage, KenyaRegion,
    Achievement, BlogPost, Partner, SocialMediaPost
)
from .serializers import (
    AmbassadorSerializer, CulturalCommunitySerializer, CulturalHeritageSerializer,
    KenyaRegionSerializer, AchievementSerializer, BlogPostSerializer,
    PartnerSerializer, SocialMediaPostSerializer
)


class AmbassadorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Ambassador.objects.all()
    serializer_class = AmbassadorSerializer


class CulturalCommunityViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CulturalCommunity.objects.all()
    serializer_class = CulturalCommunitySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['region', 'featured']
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'created_at']


class CulturalHeritageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CulturalHeritage.objects.all()
    serializer_class = CulturalHeritageSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['heritage_type', 'featured']
    search_fields = ['title', 'description']
    ordering_fields = ['title', 'created_at']


class KenyaRegionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = KenyaRegion.objects.all()
    serializer_class = KenyaRegionSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['featured']
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'created_at']


class AchievementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['achievement_type', 'featured', 'year']
    search_fields = ['title', 'description']
    ordering_fields = ['title', 'year', 'created_at']


class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.filter(published=True)
    serializer_class = BlogPostSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'content', 'excerpt']
    ordering_fields = ['created_at', 'published_at', 'title']
    ordering = ['-created_at']


class PartnerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['partner_type', 'featured']
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'created_at']


class SocialMediaPostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialMediaPost.objects.all()
    serializer_class = SocialMediaPostSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['platform', 'featured']
    search_fields = ['content']
    ordering_fields = ['created_at', 'imported_at']
    ordering = ['-created_at']