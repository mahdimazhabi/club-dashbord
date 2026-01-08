import React, { useRef, useState, useEffect } from "react";
import { Edit2, Loader2, Trash2 } from "lucide-react";
import { FieldError } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { useAttachments } from "@/services/useAttachments";
import { Upload } from "lucide-react";
import { ApiConfig } from "@/config/ApiConfig";
import { Button } from "./ui/button";

type UplodeProfileProps = {
  label?: string;
  UrlImag?: string | null;
  error?: FieldError;
  isDisabled?: boolean;
  onChange?: (fileUrl: string) => void;
  id?: number;
};

type DataFile = {
  thumbnail: string;
  original: string;
  id: number;
};

const UplodeProfile: React.FC<UplodeProfileProps> = ({
  label,
  UrlImag,
  isDisabled,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUploadedImage] = useState<DataFile | null>(null);
  const [showUploadIcon, setShowUploadIcon] = useState(!UrlImag);
  const [isRemoved, setIsRemoved] = useState(false);
  const { mutate, isPending, removeAttachment, data } = useAttachments();
  const { File_url } = ApiConfig();
  const Find_url = data?.find(
    (item) => item.original === uploadedImage?.original
  );

  useEffect(() => {
    if (!isRemoved && UrlImag && UrlImag !== "null" && !uploadedImage) {
      setUploadedImage({
        original: UrlImag,
        thumbnail: UrlImag,
        id: -1,
      });
      setShowUploadIcon(false);
    }
  }, [UrlImag, uploadedImage, isRemoved]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      console.error("فایل انتخاب شده یک تصویر نیست");
      return;
    }

    const formData = new FormData();
    formData.append("attachment", file);

    mutate(formData, {
      onSuccess: (data: DataFile[]) => {
        if (data && data.length > 0) {
          const fileData = data[0];
          setUploadedImage(fileData);
          setIsRemoved(false);
          setShowUploadIcon(false);
          onChange?.(fileData.original);
        }
      },
      onError: (err) => {
        console.error("Upload failed:", err);
        resetInput();
      },
    });
  };

  const handleRemoveImage = () => {
    if (uploadedImage) {
      if (Find_url?.id) {
        removeAttachment(Find_url?.id, {
          onSuccess: () => {
            handleRemoveSuccess();
          },
          onError: (err) => {
            console.error("Delete failed:", err);
          },
        });
      } else {
        handleRemoveSuccess();
      }
    } else {
      handleRemoveSuccess();
    }
  };

  const handleRemoveSuccess = async () => {
    setUploadedImage(null);
    setShowUploadIcon(true);
    setIsRemoved(true);
    resetInput();
    onChange?.("");
  };

  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleEditImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isDisabled) {
      inputRef.current?.click();
    }
  };

  const getDisplayImage = () => {
    if (isRemoved) {
      return null;
    }

    if (uploadedImage?.original && uploadedImage.original !== "null") {
      return uploadedImage.original.startsWith("http")
        ? uploadedImage.original
        : `${File_url}/${uploadedImage.original}`;
    }

    if (UrlImag && UrlImag !== "null") {
      return UrlImag;
    }

    return null;
  };

  const displayImage = getDisplayImage();
  const hasImage = !!displayImage && displayImage !== "null" && !showUploadIcon;

  return (
    <div className="flex flex-col  gap-2">
      {label && (
        <Label className="text-sm font-medium text-spidar1">{label}</Label>
      )}

      <div className="flex flex-col items-center gap-3">
        {/* تصویر */}
        <div className="relative">
          <button
            type="button"
            onClick={() => !isDisabled && inputRef.current?.click()}
            disabled={isDisabled}
            className={`w-32 h-32 rounded-full border flex items-center justify-center
        bg-gray-100 overflow-hidden
        ${isDisabled ? "opacity-50" : ""}
      `}
          >
            {isPending ? (
              <Loader2 className="h-7 w-7 animate-spin text-gray-600" />
            ) : hasImage ? (
              <img
                src={displayImage}
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <Upload className="text-gray-400 h-8 w-8" />
            )}
          </button>
        </div>
        {hasImage && (
          <div className="flex gap-2.5">
            <Button
              onClick={handleEditImage}
              disabled={isDisabled}
              icon={<Edit2 />}
              size={"icon"}
              variant={"default"}
            />

            <Button
              onClick={handleRemoveImage}
              disabled={isDisabled}
              icon={<Trash2 />}
              size={"icon"}
              variant={"destructive"}
            />
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        disabled={isDisabled || isPending}
      />
    </div>
  );
};

export default UplodeProfile;
