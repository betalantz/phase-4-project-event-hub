class EventsController < ApplicationController
    wrap_parameters format: []
    
    def index
        events = @current_user.events.all 
        render json: events 
    end

    def show
        event = @current_user.events.find_by(id: params[:id])
        render json: event, status: :ok
    end

    def create
        event = @current_user.events.create!(event_params)
        render json: event, status: :created 
    end

private

    def event_params
        params.permit(:title, :description, :category, :date, :start_time, :end_time)
    end

end
