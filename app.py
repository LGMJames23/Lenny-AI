import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleWare
from pydantic import BaseModel
import torch
from transformers import autotokenizer
