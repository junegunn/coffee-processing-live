#!/usr/bin/env ruby
# encoding: UTF-8
# Junegunn Choi (junegunn.c@gmail.com)
# 2012/04/26-

require 'rubygems'
ENV['BUNDLE_GEMFILE'] = File.join(File.dirname(__FILE__), 'Gemfile')
require 'bundler/setup'
require 'sinatra'
require 'coffee-processing'

get '/' do
  erb :index
end

post '/' do
  CoffeeProcessing.compile 'this.sketch', params[:code]
end

