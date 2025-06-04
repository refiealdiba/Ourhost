import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config/config";
import { useParams } from "react-router-dom";

interface FileItem {
    file?: string;
    fullpath: string;
    humansize: string;
    type: string;
    mtime?: string;
}

const FileManager = () => {
    const [files, setFiles] = useState<FileItem[]>([]);
    const fileUrl = `${config.urlService}/filemanager/files`;
    const { username } = useParams<{ username: string }>();
    console.log("Username from params:", username);

    useEffect(() => {
        const getFiles = async () => {
            try {
                const response = await axios.get(fileUrl, {
                    params: { username: username },
                });
                console.log(response.data.data);
                setFiles(response.data.data); // karena langsung array
            } catch (error) {
                console.error("Error fetching file manager data:", error);
            }
        };

        getFiles();
    }, []);

    console.log(files);
    return (
        <div>
            <h1>File Manager</h1>
            <p>This is the file manager page.</p>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Files</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                File
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Size
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Modified
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {files.map((file, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{file.file}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{file.humansize}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{file.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{file.mtime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FileManager;
