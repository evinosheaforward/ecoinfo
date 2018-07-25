FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /evinoshea
WORKDIR /evinoshea
VOLUME /var/lib/postgresql/data
COPY Gemfile /evinoshea/Gemfile
COPY Gemfile.lock /evinoshea/Gemfile.lock
RUN bundle install
COPY . /evinoshea
