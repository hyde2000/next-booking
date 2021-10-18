import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "../middlewares/catchAsyncError";

// Get All Rooms => (GET) /api/rooms/
export const getAllRooms = catchAsyncError(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

// Create New Room => (POST) /api/rooms/
export const createNewRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

// Get Room Details => (GET) /api/rooms/:id
export const getSingleRoom = catchAsyncError(async (req, res) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

// Update Room => (PUT) /api/rooms/:id
export const updateRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 400));
  }
  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// Delete Room => (DELETE) /api/rooms/:id
export const deleteRoom = catchAsyncError(async (req, res) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 400));
  }
  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room is deleted",
  });
});