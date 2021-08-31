class AttendeesController < ApplicationController
  wrap_parameters format: []

  def create
    attendee = Attendee.create!(attendee_params)
    render json: attendee, status: :created
  end

  def index
    attendees = Attendee.all
    render json: attendees, status: :ok
  end

  # def show
  #   attendees = Attendee.find_by(event_id: params[:id])
  #   render json: attendees
  # end

  private

  def attendee_params
    params.permit(:name, :user_id, :event_id)
  end
  
end
