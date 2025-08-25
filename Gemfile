source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"
gem "jekyll-feed", "~> 0.17"
gem "jekyll-seo-tag", "~> 2.8"

# Ruby 3.4+ için gerekli gem'ler
gem "csv"
gem "logger"
gem "base64"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Use webrick, a pure Ruby HTTP server, when running on older versions of Ruby
# (< 2.7) that don't have the webrick gem bundled.
gem "webrick", "~> 1.7"
