from django.contrib import admin
from .models import (
    Ambassador, CulturalCommunity, CulturalHeritage, KenyaRegion,
    Achievement, BlogPost, Partner, SocialMediaPost
)


@admin.register(Ambassador)
class AmbassadorAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name', 'title']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(CulturalCommunity)
class CulturalCommunityAdmin(admin.ModelAdmin):
    list_display = ['name', 'region', 'featured', 'created_at']
    list_filter = ['region', 'featured', 'created_at']
    search_fields = ['name', 'region', 'description']
    list_editable = ['featured']


@admin.register(CulturalHeritage)
class CulturalHeritageAdmin(admin.ModelAdmin):
    list_display = ['title', 'heritage_type', 'featured', 'created_at']
    list_filter = ['heritage_type', 'featured', 'created_at']
    search_fields = ['title', 'description']
    list_editable = ['featured']


@admin.register(KenyaRegion)
class KenyaRegionAdmin(admin.ModelAdmin):
    list_display = ['name', 'featured', 'created_at']
    list_filter = ['featured', 'created_at']
    search_fields = ['name', 'description']
    list_editable = ['featured']


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ['title', 'achievement_type', 'year', 'featured', 'created_at']
    list_filter = ['achievement_type', 'year', 'featured', 'created_at']
    search_fields = ['title', 'description']
    list_editable = ['featured']


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'published', 'created_at', 'published_at']
    list_filter = ['published', 'created_at', 'published_at']
    search_fields = ['title', 'content', 'excerpt']
    list_editable = ['published']
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ['created_at', 'updated_at', 'published_at']


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ['name', 'partner_type', 'featured', 'created_at']
    list_filter = ['partner_type', 'featured', 'created_at']
    search_fields = ['name', 'description']
    list_editable = ['featured']


@admin.register(SocialMediaPost)
class SocialMediaPostAdmin(admin.ModelAdmin):
    list_display = ['platform', 'created_at', 'featured', 'imported_at']
    list_filter = ['platform', 'featured', 'created_at', 'imported_at']
    search_fields = ['content', 'post_id']
    list_editable = ['featured']
    readonly_fields = ['imported_at']